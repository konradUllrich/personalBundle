import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_EMAILTEMPLATESAttributes {
    STR_AN?: string;
    TXT_TEXT?: string;
    DTEDIT?: Date;
    STR_MANDANT?: string;
    LUSERID?: number;
    STR_TITEL?: string;
    STR_BETREFF?: string;
    DTINSERT?: Date;
    LUSERIDINSERT?: number;
    STRID: string;
    TXT_BESCHREIBUNG?: string;
}

@Table({
	tableName: "KB_T_EMAILTEMPLATES",
	timestamps: false 
})
export class KB_T_EMAILTEMPLATES extends Model<KB_T_EMAILTEMPLATESAttributes, KB_T_EMAILTEMPLATESAttributes> implements KB_T_EMAILTEMPLATESAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_TEXT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MANDANT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BETREFF?: string;

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BESCHREIBUNG?: string;

}