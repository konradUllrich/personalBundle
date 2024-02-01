import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_KAT_MATCHINGAttributes {
    STR_ANTRAGSARTBEZEICHNUNGINBDA?: string;
    LID: number;
    LUSERIDINSERT?: number;
    STR_VORGANGSTYPID?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_VORGANGSTYPBEZEICHNUNG?: string;
    STR_OBJEKTIDINVIS?: string;
    B_NEUEAKTEERSTELLEN?: boolean;
    TXT_GESCHAEFTSGANGVERFUEGUNG?: string;
    B_GESCHAEFTSGANGANLEGEN?: boolean;
    STR_EMAILADRESSEFUERBENACHRICH?: string;
    STR_AKTENTYP?: string;
    B_PRUEFUNG?: boolean;
    STR_AKTENPLANSCHLUESSEL?: string;
    STR_AKTENTYPID?: string;
    STR_BDATRANSAKTIONSNR?: string;
}

@Table({
	tableName: "BIXV_KAT_MATCHING",
	timestamps: false 
})
export class BIXV_KAT_MATCHING extends Model<BIXV_KAT_MATCHINGAttributes, BIXV_KAT_MATCHINGAttributes> implements BIXV_KAT_MATCHINGAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANTRAGSARTBEZEICHNUNGINBDA?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VORGANGSTYPID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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
    	type: DataType.STRING(255) 
    })
    	STR_VORGANGSTYPBEZEICHNUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_OBJEKTIDINVIS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NEUEAKTEERSTELLEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_GESCHAEFTSGANGVERFUEGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_GESCHAEFTSGANGANLEGEN?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAILADRESSEFUERBENACHRICH?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTENTYP?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PRUEFUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTENPLANSCHLUESSEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTENTYPID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BDATRANSAKTIONSNR?: string;

}