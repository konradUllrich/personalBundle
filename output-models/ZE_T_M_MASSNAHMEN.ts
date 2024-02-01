import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_M_MASSNAHMENAttributes {
    LUSERIDINSERT?: number;
    TXT_MASSNAHMEN?: string;
    LUSERID?: number;
    STRID: string;
    DTEDIT?: Date;
    FKSTRID?: string;
    DTINSERT?: Date;
}

@Table({
	tableName: "ZE_T_M_MASSNAHMEN",
	timestamps: false 
})
export class ZE_T_M_MASSNAHMEN extends Model<ZE_T_M_MASSNAHMENAttributes, ZE_T_M_MASSNAHMENAttributes> implements ZE_T_M_MASSNAHMENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_MASSNAHMEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}