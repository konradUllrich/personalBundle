import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_BEOBACHTENAttributes {
    DTEDIT?: Date;
    STRID: string;
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    B_BEOBACHTEN?: boolean;
    DTINSERT?: Date;
    REF_BENUTZER?: number;
}

@Table({
	tableName: "KB_T_B_K_BEOBACHTEN",
	timestamps: false 
})
export class KB_T_B_K_BEOBACHTEN extends Model<KB_T_B_K_BEOBACHTENAttributes, KB_T_B_K_BEOBACHTENAttributes> implements KB_T_B_K_BEOBACHTENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BEOBACHTEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

}