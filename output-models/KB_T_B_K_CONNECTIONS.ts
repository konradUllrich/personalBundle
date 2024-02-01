import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_CONNECTIONSAttributes {
    DTINSERT?: Date;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    REF_KARTE?: string;
    STRID: string;
    FKSTRID?: string;
    LUSERID?: number;
}

@Table({
	tableName: "KB_T_B_K_CONNECTIONS",
	timestamps: false 
})
export class KB_T_B_K_CONNECTIONS extends Model<KB_T_B_K_CONNECTIONSAttributes, KB_T_B_K_CONNECTIONSAttributes> implements KB_T_B_K_CONNECTIONSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_KARTE?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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

}