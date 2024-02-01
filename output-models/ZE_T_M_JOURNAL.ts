import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_M_JOURNALAttributes {
    LUSERID?: number;
    STR_AKTION?: string;
    STRID: string;
    DTEDIT?: Date;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    TXT_NOTIZ?: string;
}

@Table({
	tableName: "ZE_T_M_JOURNAL",
	timestamps: false 
})
export class ZE_T_M_JOURNAL extends Model<ZE_T_M_JOURNALAttributes, ZE_T_M_JOURNALAttributes> implements ZE_T_M_JOURNALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTION?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_NOTIZ?: string;

}