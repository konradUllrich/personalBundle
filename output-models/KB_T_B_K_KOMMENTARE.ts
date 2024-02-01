import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_KOMMENTAREAttributes {
    TXT_KOMMENTAR?: string;
    LUSERIDINSERT?: number;
    STRID: string;
    DTINSERT?: Date;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "KB_T_B_K_KOMMENTARE",
	timestamps: false 
})
export class KB_T_B_K_KOMMENTARE extends Model<KB_T_B_K_KOMMENTAREAttributes, KB_T_B_K_KOMMENTAREAttributes> implements KB_T_B_K_KOMMENTAREAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_KOMMENTAR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}