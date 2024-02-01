import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_BACKUPAttributes {
    STRID: string;
    LUSERID?: number;
    TXT_BERECHTIGUNG?: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    L_FILEINFORMATION?: number;
    DT_DATUM?: Date;
    DTINSERT?: Date;
    STR_TITEL?: string;
    STR_MANDANT?: string;
}

@Table({
	tableName: "KB_T_BACKUP",
	timestamps: false 
})
export class KB_T_BACKUP extends Model<KB_T_BACKUPAttributes, KB_T_BACKUPAttributes> implements KB_T_BACKUPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BERECHTIGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DATUM?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MANDANT?: string;

}