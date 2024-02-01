import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPPAttributes {
    TXT_REDAKTION?: string;
    B_FREIGABE?: boolean;
    STR_ERSTELLER?: string;
    STR_TITEL?: string;
    DTINSERT?: Date;
    STRID: string;
    LUSERID?: number;
    B_VEROEFFENTLICHT?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    TXT_EINLEITUNGSTEXT?: string;
    TXT_LESERECHTE?: string;
    L_FILEINFORMATION?: number;
}

@Table({
	tableName: "T_SMAPP",
	timestamps: false 
})
export class T_SMAPP extends Model<T_SMAPPAttributes, T_SMAPPAttributes> implements T_SMAPPAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_REDAKTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_FREIGABE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ERSTELLER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

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
    	type: DataType.STRING 
    })
    	B_VEROEFFENTLICHT?: boolean;

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
    	type: DataType.STRING(-1) 
    })
    	TXT_EINLEITUNGSTEXT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_LESERECHTE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_FILEINFORMATION?: number;

}